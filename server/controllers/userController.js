import User from "../models/user.js";
import { asyncHandler } from "../middlewares/asyncHandler.js"
import { generateToken } from "../utils/generateToken.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";


// Register User
export const register = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Auth']
  
    const {name, username, password, bio} = req.body;
    if(!name || !username || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        })
    }
    const existingUser = await User.findOne({username});
    if(existingUser) {
        return res.status(400).json({
            success: false,
            message: "Username already exists",
        })
    }

    // Avatar Upload to Cloudinary
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Please upload an avatar",
        });
    }

    let avatar = {};
    try {
        const result = await uploadToCloudinary(req.file);
        avatar = {
            public_id: result.public_id,
            url: result.secure_url,
        };
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error uploading avatar to Cloudinary",
        });
    }

     const user = await User.create({
        name,
        username,
        password,
        bio,
        avatar,
     });

     const token = generateToken(user._id);

     res.status(201)
     .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
     })
     .json({
        success: true,
        message: "User registered successfully",
     })
});

// LOGIN
export const login = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Auth']
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user)
    return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(user._id);

  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message: "Login successful",
    });
});

// LOGOUT
export const logout = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Auth']
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(0),
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

// Get My Profile
export const getMyProfile = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Auth']
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});
