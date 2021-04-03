const initialState = {
  // Layout State
  editorActive: false,
  rollEditorActive: false,

  // Roll / Dice Data
  // Stub
  dice: [
    { id: "000", name: "Sample D20", type: 20, count: 1 },
    { id: "001", name: "Sample D10", type: 10, count: 2 },
    { id: "002", name: "Sample D6", type: 6, count: 3 },
  ],

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
