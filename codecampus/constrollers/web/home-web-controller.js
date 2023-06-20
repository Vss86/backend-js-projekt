const LearningPath = require("../../models/mongodb/learning-path-model");

module.exports = {
  home: async (req, res) => {
    const learningPaths = await LearningPath.find().lean();

    if (learningPaths.length === 0) {
      const learningPath = new LearningPath({
        title: "Lär dig programmera Python",
        description: "",
        estimatedHours: 8,
        steps: [
          "Se video 1: Länk",
          "Gör uppgift 1: Länk",
          "Se video 2: Länk",
          "Gör uppgift 2: Länk",
          "Se video 3: Länk",
          "Gör uppgift 3: Länk",
          "Gör slutuppgift: Länk"
        ]
      });

      // Save the learningPath object to the database if needed
    }

    res.render("home", { title: "CodeCampus Start", learningPaths });
  },
};
