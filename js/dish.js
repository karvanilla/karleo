let meals = []; 

async function loadDishes() {
  try {
    const apiUrl = "https://edu.std-900.ist.mospolytech.ru/labs/api/dishes";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.status}`);
    }

    const data = await response.json();

    meals = data.map(dish => ({
      ...dish,
      category: dish.category?.replace(/-/g, "_") || dish.category
    }));

    console.log("Блюда успешно загружены и обработаны:", meals);
  } catch (error) {
    console.error("Ошибка при загрузке данных о блюдах:", error);
  }
}

export { meals, loadDishes };