import User from './../models/User';

export default async (req, res) => {

  try {
    let user = await User.findById(req.params.id).select('-password');

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ err });
  }
}
