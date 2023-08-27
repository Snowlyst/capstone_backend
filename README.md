# capstone_backend

capstone backend for project verve

# Instructions/Help for Auth0

## To post to backend with Authentication Key on Frontend add

E.g. to add new listing :

if (isAuthenticated && accessToken !== null) {
const objToSend = {
title,
category,
condition,
price,
description,
shippingDetails,
currUser,
};

      // Send request to create new listing in backend
      // please take note of the headers that are included here. The access token is included here.

      const output = await axios
        .post(`${BACKEND_URL}/listings`, objToSend, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          // Clear form state
          console.log(output);
          setTitle("");
          setCategory("");
          setCondition("");
          setPrice(0);
          setDescription("");
          setShippingDetails("");
          // Navigate to listing-specific page after submitting form
          navigate(`/listings/${res.data.id}`);
        });
    } else {
      loginWithRedirect();
    }

### Codes to add on backend

// for new routers, pass in jwtCheck (already imported in index.js on backend)

const usersRouter = new UsersRouter(usersController, jwtCheck);

// in the router pass in jwtCheck as props and add this below the code to import the db models (if still unclear refer to Users Router)

this.jwtCheck = jwtCheck;

// then pass it into the specific route you want to ensure only logged in users can access
