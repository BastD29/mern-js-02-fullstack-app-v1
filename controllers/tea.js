import teaModel from "../models/tea.js";

const newTea = (req, res) => {
  //   teaModel.findOne({ name: req.body.name }, (err, data) => {
  //     if (!data) {
  //       const newTea = new teaModel({
  //         name: req.body.name,
  //         image: req.body.image,
  //         description: req.body.description,
  //         keywords: req.body.keywords,
  //         origin: req.body.origin,
  //         brew_time: req.body.brew_time,
  //         temperature: req.body.temperature,
  //       });

  //       newTea.save((err, data) => {
  //         if (err) return res.json({ Error: err });
  //         return res.json(data);
  //       });
  //     } else {
  //       if (err)
  //         return res.json(`Something went wrong, please try again. ${err}`);
  //       return res.json({ message: "Tea already exists" });
  //     }
  //   });

  // try {
  //   const data = await teaModel.findOne({ name: req.body.name });
  //   if (!data) {
  //     const newTea = new teaModel({
  //       name: req.body.name,
  //       image: req.body.image,
  //       description: req.body.description,
  //       keywords: req.body.keywords,
  //       origin: req.body.origin,
  //       brew_time: req.body.brew_time,
  //       temperature: req.body.temperature,
  //     });
  //     const savedTea = await newTea.save();
  //     return res.json(savedTea);
  //   } else {
  //     return res.json({ message: "Tea already exists" });
  //   }
  // } catch (err) {
  //   return res.json({ Error: err });
  // }

  teaModel.findOne({ name: req.body.name }).then((err, data) => {
    if (!data) {
      const newTea = new teaModel({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        keywords: req.body.keywords,
        origin: req.body.origin,
        brew_time: req.body.brew_time,
        temperature: req.body.temperature,
      });

      newTea.save().then((err, data) => {
        if (err) return res.json({ Error: err });
        return res.json(data);
      });
    } else {
      if (err)
        return res.json(`Something went wrong, please try again. ${err}`);
      return res.json({ message: "Tea already exists" });
    }
  });
};

export default { newTea };
