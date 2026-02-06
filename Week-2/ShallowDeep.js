const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

              const userCopy = {...user}
              userCopy.name = "cr",
              preferences.theme = "light"

              console.log(user)
              console.log(userCopy)