/* =====================================================
   ALPINE GELATO
===================================================== */


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


/* ================= MENU FILTER ================= */

const categoryButtons =
    document.querySelectorAll(".category");

const menuCards =
    document.querySelectorAll(".menu-card");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedCategory =
            button.dataset.category;


        menuCards.forEach(card => {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ================= CHATBOT ================= */

const chatButton =
    document.getElementById("chatButton");

const chatWindow =
    document.getElementById("chatWindow");

const closeChat =
    document.getElementById("closeChat");

const chatMessages =
    document.getElementById("chatMessages");

const chatInput =
    document.getElementById("chatInput");

const sendMessage =
    document.getElementById("sendMessage");


/* Open */

chatButton.addEventListener("click", () => {

    chatWindow.classList.toggle("active");

});


/* Close */

closeChat.addEventListener("click", () => {

    chatWindow.classList.remove("active");

});


/* ================= CHAT RESPONSES ================= */

function getBotResponse(message) {

    const text =
        message.toLowerCase();


    /* FLAVOURS */

    if (
        text.includes("flavour") ||
        text.includes("flavor") ||
        text.includes("gelato") ||
        text.includes("ice cream")
    ) {

        return `
            🍨 Our menu includes Chocolate,
            Vanilla, Strawberry, Mango and
            Pistachio gelato.
            <br><br>
            We also have a delicious
            Strawberry Shake.
        `;

    }


    /* PRICES */

    if (
        text.includes("price") ||
        text.includes("prices") ||
        text.includes("cost")
    ) {

        return `
            💰 Current demo menu prices:
            <br><br>
            🍫 Chocolate — Rs. 350<br>
            🍦 Vanilla — Rs. 350<br>
            🍓 Strawberry — Rs. 350<br>
            🥭 Mango — Rs. 350<br>
            💚 Pistachio — Rs. 400<br>
            🥤 Strawberry Shake — Rs. 450
        `;

    }


    /* LOCATION */

    if (
        text.includes("location") ||
        text.includes("where") ||
        text.includes("address") ||
        text.includes("branch")
    ) {

        return `
            📍 Please check the
            <strong>Visit Us</strong> section
            for Alpine's location information.
        `;

    }


    /* TIMINGS */

    if (
        text.includes("time") ||
        text.includes("timing") ||
        text.includes("open") ||
        text.includes("close")
    ) {

        return `
            🕐 For the latest opening hours,
            please contact Alpine directly.
        `;

    }


    /* GREETING */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            Hi! 👋 Welcome to Alpine Gelato.
            <br><br>
            How can I help you today?
        `;

    }


    /* DEFAULT */

    return `
        Thanks for your message! 😊
        <br><br>
        I can help you with:
        <br><br>
        🍨 Flavours<br>
        💰 Prices<br>
        📍 Location<br>
        🕐 Opening hours
    `;

}


/* ================= ADD MESSAGE ================= */

function addMessage(message, type) {

    const messageElement =
        document.createElement("div");


    if (type === "user") {

        messageElement.classList.add(
            "user-message"
        );

    } else {

        messageElement.classList.add(
            "bot-message"
        );

    }


    messageElement.innerHTML =
        message;


    chatMessages.appendChild(
        messageElement
    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


/* ================= SEND MESSAGE ================= */

function sendChatMessage() {

    const message =
        chatInput.value.trim();


    if (!message) return;


    addMessage(
        message,
        "user"
    );


    chatInput.value = "";


    setTimeout(() => {

        const response =
            getBotResponse(message);


        addMessage(
            response,
            "bot"
        );

    }, 500);

}


sendMessage.addEventListener(
    "click",
    sendChatMessage
);


/* ================= ENTER KEY ================= */

chatInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            sendChatMessage();

        }

    }
);


/* ================= QUICK QUESTIONS ================= */

document
    .querySelectorAll(".quick-questions button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.dataset.question;


                addMessage(
                    question,
                    "user"
                );


                setTimeout(() => {

                    const response =
                        getBotResponse(
                            question
                        );


                    addMessage(
                        response,
                        "bot"
                    );

                }, 400);

            }
        );

    });


/* ================= CONSOLE ================= */

console.log(
    "🍨 Alpine Gelato website loaded successfully."
);