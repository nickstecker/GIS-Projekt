var notes = [
    "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#",     "A", "Bb", "B"
  ]

var synth = new Tone.Synth({
	"oscillator" : {
		"type" : "square",
		"modulationFrequency" : 0.2
	},
	"envelope" : {
		"attack" : 0.02,
		"decay" : 0.1,
		"sustain" : 0.2,
		"release" : 0.9,
	}
}).toMaster();

function startSound(note, octave) {
    synth.triggerAttack(notes[note] + octave);
    console.log(notes[note] + octave);
}

function stopSound() {
    synth.triggerRelease();
}
