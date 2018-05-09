import jquery from 'jquery';
import '../styles/template-library.less';

const messageTypes = {
    notification: 'notification',
    warning: 'warning',
    error: 'error'
};

function showMessage(root, text, messageType) {
    jquery(root).append(`<p class="message ${messageType}">${text}</p>`);
}

function showNotification(root, text) {
    showMessage(root, text, messageTypes.notification);
}

function showWarning(root, text) {
    showMessage(root, text, messageTypes.warning);
}

function showError(root, text) {
    showMessage(root, text, messageTypes.error);
}

export {
    showNotification,
    showWarning,
    showError
};