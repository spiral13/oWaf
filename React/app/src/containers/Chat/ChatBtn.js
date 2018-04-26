/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import ChatBtn from 'src/components/ChatBtn';

import { toggleChat } from 'src/store/reducers/buttons';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  openChat: state.buttons.openChat,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleChat }, dispatch),
});

// Container
const ChatBtnContainer = connect(mapStateToProps, mapDispatchToProps)(ChatBtn);

/**
 * Export
 */
export default ChatBtnContainer;
