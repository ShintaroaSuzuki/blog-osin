module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "path_name",
        message: "記事のパス名を入力してください",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      return answers;
    });
  },
};
