let all_movies = [
    {
      id: 1,
      name: "The Plot",
      plot: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugiat quis provident nisi animi...",
      Director: "John Doe",
      Starring: ["James Hewitt", "Jess Richards"],
      Released: "15, Nov",
      RunningTime: "90 mins",
      viewingTime: {
          monday: ["11:00am", "12:45pm"],
          tuesday: ["2:15pm", "6:00pm", "9:45pm"],
          wednesday: ["2:00pm", "4:45pm", "8:30pm"],
          thursday: ["10:00am"],
          friday: ["5:45am", "9:00pm"],
          saturday: ["2:15pm", "6:00pm"],
          sunday: ["11:00am"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "18",
      genre: ["Thriller", "Horror"],
    },
    {
      id: 2,
      name: "Silent Echo",
      plot: "Nemo quod rerum est inventore labore! Beatae exercitationem harum corrupti aut...",
      Director: "Jane Smith",
      Starring: ["Liam Brown", "Sophie Turner"],
      Released: "22, Dec",
      RunningTime: "120 mins",
      viewingTime: {
          monday: ["1:00pm", "3:45pm"],
          tuesday: ["5:00pm", "8:00pm"],
          wednesday: ["1:30pm", "7:45pm"],
          thursday: ["11:00am", "4:00pm"],
          friday: ["2:45pm", "8:30pm"],
          saturday: ["12:00pm", "5:15pm"],
          sunday: ["3:00pm"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "15",
      genre: ["Drama", "Mystery"],
    },
    {
      id: 3,
      name: "Dark Horizons",
      plot: "Consequuntur fugiat beatae est ex aspernatur rem nihil libero eveniet voluptatibus...",
      Director: "Mike Johnson",
      Starring: ["Chris Evans", "Scarlett Johansson"],
      Released: "8, Jan",
      RunningTime: "105 mins",
      viewingTime: {
          monday: ["10:00am", "2:45pm"],
          tuesday: ["12:00pm", "7:00pm"],
          wednesday: ["1:15pm", "9:00pm"],
          thursday: ["10:00am"],
          friday: ["11:45am", "8:00pm"],
          saturday: ["4:15pm", "9:45pm"],
          sunday: ["2:00pm"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "PG-13",
      genre: ["Action", "Adventure"],
    },
    {
      id: 4,
      name: "Whispering Shadows",
      plot: "Non facere maxime dicta nisi ad nostrum perferendis quidem illo amet ipsam...",
      Director: "Emily Davis",
      Starring: ["Jennifer Lawrence", "Brad Pitt"],
      Released: "30, Mar",
      RunningTime: "95 mins",
      viewingTime: {
          monday: ["12:00pm", "2:45pm"],
          tuesday: ["1:30pm", "7:30pm"],
          wednesday: ["10:15am", "6:00pm"],
          thursday: ["11:30am"],
          friday: ["4:00pm", "8:15pm"],
          saturday: ["3:00pm", "6:45pm"],
          sunday: ["11:30am"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "R",
      genre: ["Thriller", "Mystery"],
    },
    {
      id: 5,
      name: "The Last Light",
      plot: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quod rerum est inventore labore...",
      Director: "Robert Brown",
      Starring: ["Tom Hardy", "Emma Watson"],
      Released: "12, Apr",
      RunningTime: "110 mins",
      viewingTime: {
          monday: ["11:00am", "4:45pm"],
          tuesday: ["12:15pm", "9:00pm"],
          wednesday: ["3:30pm", "7:45pm"],
          thursday: ["1:00pm"],
          friday: ["2:45pm", "10:00pm"],
          saturday: ["5:15pm", "9:45pm"],
          sunday: ["4:00pm"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "PG",
      genre: ["Drama", "Fantasy"],
    },
    {
      id: 6,
      name: "Echoes of Time",
      plot: "Beatae exercitationem harum corrupti aut, quod facere ullam fugiat quis provident nisi animi...",
      Director: "Sarah Williams",
      Starring: ["Matthew McConaughey", "Anne Hathaway"],
      Released: "6, Jun",
      RunningTime: "115 mins",
      viewingTime: {
          monday: ["1:00pm", "3:45pm"],
          tuesday: ["4:00pm", "9:00pm"],
          wednesday: ["11:30am", "8:00pm"],
          thursday: ["12:15pm"],
          friday: ["3:45pm", "7:00pm"],
          saturday: ["2:00pm", "10:15pm"],
          sunday: ["12:00pm"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "18",
      genre: ["Sci-Fi", "Adventure"],
    },
    {
      id: 7,
      name: "Silent Hill",
      plot: "Nemo quod rerum est inventore labore! Beatae exercitationem harum corrupti aut...",
      Director: "Michael Bay",
      Starring: ["Keanu Reeves", "Sandra Bullock"],
      Released: "20, Jul",
      RunningTime: "130 mins",
      viewingTime: {
          monday: ["12:00pm", "3:30pm"],
          tuesday: ["11:00am", "5:30pm", "9:15pm"],
          wednesday: ["2:30pm", "8:00pm"],
          thursday: ["1:00pm"],
          friday: ["5:45pm", "10:00pm"],
          saturday: ["3:15pm", "7:45pm"],
          sunday: ["2:30pm"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "R",
      genre: ["Horror", "Thriller"],
    },
    {
      id: 8,
      name: "The Lost City",
      plot: "Consequuntur fugiat beatae est ex aspernatur rem nihil libero eveniet voluptatibus...",
      Director: "Steven Spielberg",
      Starring: ["Chris Pratt", "Bryce Dallas Howard"],
      Released: "15, Aug",
      RunningTime: "105 mins",
      viewingTime: {
          monday: ["1:00pm", "3:45pm"],
          tuesday: ["2:00pm", "6:00pm"],
          wednesday: ["1:30pm", "7:45pm"],
          thursday: ["11:00am"],
          friday: ["5:45pm", "9:15pm"],
          saturday: ["2:15pm", "8:00pm"],
          sunday: ["4:00pm"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "PG-13",
      genre: ["Adventure", "Action"],
    },
    {
      id: 9,
      name: "Fading Memories",
      plot: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quod rerum est inventore labore...",
      Director: "Christopher Nolan",
      Starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      Released: "29, Sep",
      RunningTime: "145 mins",
      viewingTime: {
          monday: ["10:00am", "2:45pm"],
          tuesday: ["12:00pm", "6:00pm"],
          wednesday: ["1:15pm", "8:30pm"],
          thursday: ["10:00am"],
          friday: ["11:45am", "7:00pm"],
          saturday: ["3:15pm", "9:00pm"],
          sunday: ["5:00pm"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "18",
      genre: ["Drama", "Sci-Fi"],
    },
    {
      id: 10,
      name: "Breaking Point",
      plot: "Non facere maxime dicta nisi ad nostrum perferendis quidem illo amet ipsam...",
      Director: "James Cameron",
      Starring: ["Dwayne Johnson", "Emily Blunt"],
      Released: "18, Oct",
      RunningTime: "135 mins",
      viewingTime: {
          monday: ["1:00pm", "4:45pm"],
          tuesday: ["12:15pm", "8:00pm"],
          wednesday: ["3:30pm", "9:45pm"],
          thursday: ["2:00pm"],
          friday: ["3:45pm", "10:15pm"],
          saturday: ["5:30pm", "10:00pm"],
          sunday: ["4:15pm"],
      },
      trailer: "youtube.com",
      image: "",
      imageHero: "",
      rating: "PG-13",
      genre: ["Action", "Thriller"],
    },
  ];
  

export default all_movies;