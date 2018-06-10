import Subject from './../models/Subject';

export default async (req, res) => {
  let subject = new Subject(req.body);

  await subject.save();

  return res.status(201)
            .json({ subject });
}
