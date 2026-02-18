import { List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

const GroupList = ({ groups, selectedGroup, setSelectedGroup }) => {
  return (
    <List sx={{ height: "100%", overflowY: "auto"}}>
      {groups.map((group) => (
        <ListItemButton
          key={group._id}
          selected={selectedGroup?._id === group._id}
          onClick={() => setSelectedGroup(group)}
        >
            <ListItemAvatar>
                <Avatar src="group.avatar" />
            </ListItemAvatar>
          <ListItemText primary={group.name}/>
        </ListItemButton>
      ))}
    </List>
    
  );
};

export default GroupList;
