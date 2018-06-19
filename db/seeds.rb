10.times do
  body = Faker::Friends.quote
  Post.create(body: body)
end