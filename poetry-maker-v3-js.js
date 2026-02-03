let title = ""
let lastPoem = ""

let adjectives: string[] = []
let nouns: string[] = []
let verbs: string[] = []
let adverbs: string[] = []
let omens: string[] = []

adjectives = ["ancient", "burning", "hidden", "luminous", "wandering"]
nouns = ["serpent", "star", "shadow", "seed", "fire"]
verbs = ["awakens", "whispers", "devours", "crosses", "remembers"]
adverbs = ["slowly", "silently", "beyond", "within", "eternally"]

omens = ["YES", "NO", "WAIT", "LISTEN", "RETURN"]

function generateTitle() {
    title = adjectives[randint(0, 4)] + " " + nouns[randint(0, 4)]
}

function generatePoem() {
    if (title == "") {
        generateTitle()
    }

    let verse1 = adjectives[randint(0, 4)] + " " + nouns[randint(0, 4)]
    let verse2 = verbs[randint(0, 4)] + " " + adverbs[randint(0, 4)]

    lastPoem = title + ":\n" + verse1 + ",\n" + verse2

    basic.showString(title + ":")
    basic.showString(verse1 + ",")
    basic.showString(verse2)
}

// SHAKE = POEMA COMPLETO
input.onGesture(Gesture.Shake, function () {
    generatePoem()
})

// BOTÓN B = NUEVO TÍTULO
input.onButtonPressed(Button.B, function () {
    generateTitle()
    basic.showString(title + ":")
})

// BOTÓN A = PRESAGIO
input.onButtonPressed(Button.A, function () {
    basic.showString(omens[randint(0, 4)])
})

// A+B = REPEAT POEMA
input.onButtonPressed(Button.AB, function () {
    basic.showString(lastPoem)
})