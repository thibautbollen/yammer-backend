module.exports = (mongoose) => {
  const User = mongoose.model(
    "User",
    mongoose.Schema(
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        imageURL: String,
        linkedInUrl: String,
        password: { type: String, required: true, select: false },
        role: {
          type: String,
          required: true,
          enum: ["owner", "admin", "employee"],
          default: "employee",
        },
      },
      { timestamps: true }
    )
  );

  return User;
};
