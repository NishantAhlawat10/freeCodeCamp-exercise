const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";
const postContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

const timeAgo = (time) => {
  const current = new Date();
  const then = new Date(time);

  const difference = (current - then) / 1000;

  const minutes = Math.floor(difference / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
};

const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return views;
};

// takes id of selected category as argument
const forumCategory = (id) => {
  if (allCategories[id]) {
    return `<a class="category ${allCategories[id].className}" href="${forumCategoryUrl}${allCategories[id].className}/${id}">${allCategories[id].category}</a>`;
  } else {
    return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
  }
};

// avatars function should return a string made by joining img elements, one for each user_id in the posters array. Find the img URL by looking up the user_id property in the posters array and find the matching id property in the users
const avatars = (posters, users) => {
  return posters
    .map(({ user_id }) => {
      const user = users.find((u) => u.id === user_id);
      if (user) {
        const avatarUrlPath = user.avatar_template.startsWith("/")
          ? `${avatarUrl}${user.avatar_template}`
          : user.avatar_template;

        const final = avatarUrlPath.replace("{size}", "30");
        return `<img src="${final}" alt="${user.name}">`;
      }
      return "";
    })
    .join("");
};

const showLatestPosts = (data) => {
  const { users, topic_list } = data;
  const { topics } = topic_list;
  postContainer.innerHTML = topics
    .map(
      ({
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      }) => {
        return `
          <tr> 
            <td>
              <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
              ${forumCategory(category_id)}
            </td>
            <td>
              <div class="avatar-container">${avatars(posters, users)}</div>
            </td>
            <td>
              ${posts_count - 1}
            </td>
            <td>
              ${views}
            </td>
            <td>
              ${timeAgo(bumped_at)}
            </td>
          </tr>
          `;
      },
    )
    .join("");
};

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
