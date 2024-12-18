const { Op } = require("sequelize");
const { Player, Profile, Team } = require("../models");
exports.index = (req, res) => {
  res.render("index");
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (error) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const player = await Player.findOne({
      where: { player_id: req.params.player_id },
    });
    res.send(player);
  } catch (error) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newplayer = await Player.create({
      name,
      age,
      team_id,
    });
    res.send(newplayer);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;
    const updatedplayer = await Player.update(
      {
        team_id,
      },
      {
        where: { player_id },
      }
    );
    res.send(updatedplayer);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({
      where: { player_id },
    });
    if (isDeleted) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.getTeams = async (req, res) => {
  try {
    // 쿼리스트링 꺼내오기 (req.query)
    console.log("query", req.query);
    const { sort, search } = req.query;
    let teams;

    if (sort === "name_asc") {
      // sort 키가 있으면 name 기준 오름차순
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "asc"]],
      });
    } else if (search) {
      // search key에 대한 값이 있다면
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
    }

    res.send(teams);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    console.log(req.params);
    const { team_id } = req.params;
    const teamPlayers = await Team.findOne({
      where: { team_id },
      include: [{ model: Player }], // join과 같은 역할
    });

    res.send(teamPlayers);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};
