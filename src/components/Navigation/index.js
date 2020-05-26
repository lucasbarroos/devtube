import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HistoricIcon from '@material-ui/icons/History';
import BellIcon from '@material-ui/icons/NotificationsNone';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import ScheduleIcon from '@material-ui/icons/Schedule';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import VideoIcon from '@material-ui/icons/VideoCall';
import AppIcons from '@material-ui/icons/Apps';
import {
  Container,
  LogoContainer,
  Logo,
  ItemForm,
  SearchContainer,
  Search,
  SearchIcon,
  PanelContainer,
  PanelPicture,
} from './styles';
import LogoImage from '../../assets/images/logo.png';
import SearchLogoImage from '../../assets/images/search.png';

const Picture = 'https://scontent.fpnz4-1.fna.fbcdn.net/v/t1.0-9/67572121_2095729624065836_7227121578985652224_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeG9VAdNV1WHVgDjsq07M5ft8s6yEn2-NYTyzrISfb41hIxz8c_I9lH1i42TOPk8yS8DE_z1Ywq3QMeY9sOaSLdH&_nc_ohc=3FDCx0zrwEsAX8wcl5d&_nc_ht=scontent.fpnz4-1.fna&oh=ab0ff1016dd728acc2860dda027a6456&oe=5EF20C3E';

const IconStyle = {
  marginLeft: 25,
  cursor: 'pointer',
  color: '#717478',
};

const DropdownIconStyle = {
  color: '#fff',
  position: 'absolute',
  top: 20,
  left: 20,
};

const DrawerIconStyle = {
  color: '#fff',
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#2c2c32',
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    color: 'white',
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon style={DrawerIconStyle} />
          </IconButton>
          <Logo src={LogoImage} />
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><SubscriptionIcon /></ListItemIcon>
            <ListItemText primary="Inscricoes" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><VideoLibraryIcon /></ListItemIcon>
            <ListItemText primary="Biblioteca" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><HistoricIcon /></ListItemIcon>
            <ListItemText primary="Historico" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={DrawerIconStyle}><ScheduleIcon /></ListItemIcon>
            <ListItemText primary="Assistir mais tarde" />
          </ListItem>
        </List>
      </Drawer>
      <Container>
        <ItemForm>
          <MenuIcon onClick={handleDrawerOpen} style={DropdownIconStyle} />
          <LogoContainer>
            <Logo src={LogoImage} />
          </LogoContainer>
          <SearchContainer>
            <Search placeholder="Search" />
            <SearchIcon src={SearchLogoImage} />
          </SearchContainer>
          <PanelContainer>
            <VideoIcon style={IconStyle} />
            <AppIcons style={IconStyle} />
            <BellIcon style={IconStyle} />
            <PanelPicture src={Picture} />
          </PanelContainer>
        </ItemForm>
      </Container>
    </div>
  );
}
