import React, { useState } from 'react';
import styles from './HeaderCss';
import {
  AppBar, Toolbar, Button, Dialog, DialogTitle, DialogContent, Typography, DialogActions, IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
  const [isAboutUsDialogOpen, setIsAboutUsDialogOpen] = useState(false);
  const [isContributeDialogOpen, setIsContributeDialogOpen] = useState(false);

  const onCloseAboutUsDialog = () => {
    setIsAboutUsDialogOpen(false);
  }

  const onCloseContributeDialog = () => {
    setIsContributeDialogOpen(false);
  }

  const getAboutUsDialog = () => (
    <Dialog onClose={onCloseAboutUsDialog} open={isAboutUsDialogOpen}>
      {getDialogHeader('About Us', onCloseAboutUsDialog)}
      <DialogContent dividers>
        <Typography gutterBottom>
          This website is an attempt to make people <b>aware</b> of <b>false information</b> being spread on various <b>social media</b> platforms like Facebook, Whatsapp etc.
          </Typography>
        <Typography gutterBottom>
          This is an open source initiative and its complete code is available on <a href="https://github.com/hjaintech/corona-myth-buster-web">Github</a>. In you want to contribute, please visit contribute section.
          </Typography>
        <Typography gutterBottom>
          By the way, Hi, I am <b>Harshit Jain</b>, a <b>software developer</b> from <b>India</b>. To know more you can checkout my <a href="https://www.linkedin.com/in/harshit-jain-bb51292a/">LinkedIn</a> profile. If you have any feedback/suggestion/concerns, feel free to drop me a note at <b>hjain.tech@gmail.com </b>
        </Typography>
      </DialogContent>
    </Dialog>
  );

  const getDialogHeader = (headerText, closeCallBack) => {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <DialogTitle onClose={onCloseContributeDialog}>
          {headerText}
      </DialogTitle>
        <IconButton edge="start" color="inherit" onClick={closeCallBack}>
          <CloseIcon />
        </IconButton>
      </div>
    );
  }
  const getContributeDialog = () => (
    <Dialog onClose={onCloseContributeDialog} open={isContributeDialogOpen}>
      {getDialogHeader('How can you Contribute ?', onCloseContributeDialog)}
      <DialogContent dividers>
        <Typography gutterBottom>
          <b>Content: </b>You can send us any fake/incorrect information being spread on social media
        </Typography>
        <Typography gutterBottom>
          <b>Bugs/Issues: </b>You can send us any bugs/issues you find
        </Typography>
        <Typography gutterBottom>
          <b>Code Contribution: </b>This is an open source initiative, thus feel free to raise PR with new feature, bug fixes etc.
        </Typography>
        <Typography style={{ display: 'flex', justifyContent: 'space-between' }} gutterBottom>
          <a href="https://github.com/hjaintech/corona-myth-buster-web">Github Repo</a>
          <span>Email Address: <i>hjain.tech@gmail.com</i></span>
        </Typography>
      </DialogContent>
    </Dialog>
  );

  const getAppBar = () => (
    <AppBar style={styles.appBarStyles} position="fixed">
      <Toolbar>
        <Button style={styles.headerBtn} href="https://www.coronamyths.in">Home</Button>
        <div style={styles.headerBtnContainer}>
          <Button style={styles.headerBtn} onClick={() => { setIsContributeDialogOpen(true) }}>Contribute</Button>
          <Button style={styles.headerBtn} onClick={() => { setIsAboutUsDialogOpen(true) }}>About Us</Button>
        </div>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      {getAppBar()}
      {getAboutUsDialog()}
      {getContributeDialog()}
    </>
  );
}

export default Header;