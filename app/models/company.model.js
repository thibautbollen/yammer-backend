module.exports = (mongoose) => {
  const Company = mongoose.model(
    "Company",
    mongoose.Schema(
      {
        name: { type: String, required: true },
        description: { type: String, required: false },
        imageURL: String,
        street: { type: String, required: false },
        number: { type: String, required: false },
        zip: { type: String, required: false },
        city: { type: String, required: false },
      },
      { timestamps: true }
    )
  );

  return Company;
};
