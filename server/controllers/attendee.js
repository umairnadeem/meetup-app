const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find({})
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
}

exports.add = (req, res) => {
  let attendee = new Attendee(req.body);
  attendee.save()
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
}

exports.update = (req, res) => {
  Attendee.updateOne({ name: req.params.name }, req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
}

exports.delete = (req, res) => {
  Attendee.deleteOne({ name: req.params.name })
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
}
