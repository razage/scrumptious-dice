/*
    Composite Options:
        difference
        hard-light
        multiply    
        source-over
*/
Hooks.once("diceSoNiceReady", (dice3d) => {
    dice3d.addTexture("Beans", {
        name: "Beans",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/beans.png",
        bump: "modules/scrumptious-dice/images/beans.png",
    });

    dice3d.addTexture("Fries", {
        name: "Fries",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/fries.png",
        bump: "modules/scrumptious-dice/images/fries.png",
    });

    dice3d.addTexture("Mac 'n Cheese", {
        name: "Mac 'n Cheese",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/macncheese.png",
        bump: "modules/scrumptious-dice/images/macncheese.png",
    });

    dice3d.addTexture("Pepperoni Pizza", {
        name: "Pepperoni Pizza",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/pep.png",
        bump: "modules/scrumptious-dice/images/pep.png",
    });

    dice3d.addTexture("Potato Chips", {
        name: "Potato Chips",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/chips.png",
        bump: "modules/scrumptious-dice/images/chips.png",
    });

    dice3d.addTexture("Pretzels", {
        name: "Pretzels",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/pretzels.png",
        bump: "modules/scrumptious-dice/images/pretzels.png",
    });

    dice3d.addTexture("Toast", {
        name: "Toast",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/toast.png",
        bump: "modules/scrumptious-dice/images/toast.png",
    });

    dice3d.addTexture("Tater Tots", {
        name: "Tater Tots",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/tots.png",
        bump: "modules/scrumptious-dice/images/tots.png",
    });

    dice3d.addTexture("Twizzlers", {
        name: "Twizzlers",
        composite: "source-over",
        source: "modules/scrumptious-dice/images/twizzlers.png",
        bump: "modules/scrumptious-dice/images/twizzlers.png",
    });
});
