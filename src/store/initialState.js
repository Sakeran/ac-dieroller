const initialState = {
  // Layout State
  editorActive: false,
  rollEditorActive: false,

  // Roll / Dice Data

  dice: [],

  activeRoll: null,

  // Roll Editor State
  editedRoll: null,

  // Roll View State
  rollResultId: 0,
  rollResults: [],
};

export default function() {
  return initialState;
}
