export default {
  cards: [{
    header: "How many grams of sugar in our product?",
    answers: [
      {
        text: "0g!",
        correct: true,
        feedback: "Actually our product is sugar free!"
      },
      {
        text: "5g",
        correct: false,
        feedback: "Actually our product is sugar free!"
      },
      {
        text: "12g",
        correct: false,
        feedback: "Actually our product is sugar free!"
      },
      {
        text: "16g",
        correct: false,
        feedback: "Actually our product is sugar free!"
      }]
  }, {
    header: "How many goals has Ronaldo scored in total?",
    answers: [
      {
        text: "220",
        correct: false,
        feedback: null
      },
      {
        text: "290",
        correct: false,
        feedback: null
      },
      {
        text: "380",
        correct: false,
        feedback: null
      },
      {
        text: "450",
        correct: true,
        feedback: null
      }]
  },
    {
      header: "Is this Elon Mask?",
      image: "https://app.adact.me/file/view/10223271/2019-02-04%2012.17.19.jpg",
      answers: [
        {
          text: "Yes",
          correct: true,
          image: null,
          feedback: "Yes, it is he"
        },
        {
          text: "No",
          correct: false,
          image: null,
          feedback: null
        },
        {
          text: "I don't know",
          correct: false,
          image: null,
          feedback: null
        }
      ]
    },
    {
      header: "Where is beer?",
      answers: [
        {
          text: null,
          correct: true,
          image: "https://app.adact.me/file/view/10206190/Can.png",
          feedback: null
        },
        {
          text: null,
          correct: false,
          image: "https://app.adact.me/file/view/10206118/Greipfruit.png",
          feedback: null
        },
        {
          text: null,
          correct: false,
          image: "https://app.adact.me/file/view/10206963/Strawberry.png",
          feedback: null
        }]
    }
  ],
  winningCondition: {
    howMany: 1
  }
}
