import { createElement } from "../helpers/dom-helper.mjs";

const appendChatMessage = ({ username, text, isCurrentUser = false }) => {
    const messagesContainer = document.querySelector("#chat-messages");

    const usernameElement = createElement({
        tagName: "span",
        className: "chat-message-username",
        innerElements: [isCurrentUser ? `${username} (you)` : username]
    });

    const textElement = createElement({
        tagName: "span",
        className: "chat-message-text",
        innerElements: [text]
    });

    const messageElement = createElement({
        tagName: "div",
        className: "chat-message",
        attributes: { "data-username": username },
        innerElements: [usernameElement, textElement]
    });

    messagesContainer.append(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    return messageElement;
};

const setChatEnabled = (isEnabled) => {
    const input = document.querySelector("#chat-input");
    const sendButton = document.querySelector("#chat-send-btn");

    input.disabled = !isEnabled;
    sendButton.disabled = !isEnabled;

    if (!isEnabled) {
        input.value = "";
    }
};

export { appendChatMessage, setChatEnabled };
