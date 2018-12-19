10.times do
    Blog.create(
    name: Faker::Book.title,
    body: Faker::Lovecraft.paragraph(2),
    author: Faker::Artist.name
)
end
puts "Successfully seeded"