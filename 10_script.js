function showFilter() {
    const filterForm = document.getElementById('filterContent');
    const newContentForm = document.getElementById('newContent');
    
    if (filterForm.style.display === 'none' || filterForm.style.display === '') {
        filterForm.style.display = 'block';
        newContentForm.style.display = 'none';
    } else {
        filterForm.style.display = 'none';
    }
}

function showAddNew() {
    const filterForm = document.getElementById('filterContent');
    const newContentForm = document.getElementById('newContent');

    if (newContentForm.style.display === 'none' || newContentForm.style.display === '') {
        newContentForm.style.display = 'flex';
        filterForm.style.display = 'none';
    } else {
        newContentForm.style.display = 'none';
    }
}

function filterArticles() {
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe = document.getElementById('recipeCheckbox').checked;
    const showUpdate = document.getElementById('updateCheckbox').checked;

    const opinions = document.querySelectorAll('article.opinion');
    const recipes = document.querySelectorAll('article.recipe');
    const updates = document.querySelectorAll('article.update');

    opinions.forEach(article => {
        article.style.display = showOpinion ? '' : 'none';
    });

    recipes.forEach(article => {
        article.style.display = showRecipe ? '' : 'none';
    });

    updates.forEach(article => {
        article.style.display = showUpdate ? '' : 'none';
    });
}

function addNewArticle() {
    const title = document.getElementById('inputHeader').value.trim();
    const text = document.getElementById('inputArticle').value.trim();

    let type = '';
    let markerText = '';
    if (document.getElementById('opinionRadio').checked) {
        type = 'opinion';
        markerText = 'Opinion';
    } else if (document.getElementById('recipeRadio').checked) {
        type = 'recipe';
        markerText = 'Recipe';
    } else if (document.getElementById('lifeRadio').checked) {
        type = 'update';
        markerText = 'Update';
    }

    if (!title || !text || !type) {
        alert('Please fill in a title, article text, and select a type.');
        return;
    }

    const article = document.createElement('article');
    article.classList.add(type);

    const marker = document.createElement('span');
    marker.classList.add('marker');
    marker.textContent = markerText;

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const p = document.createElement('p');
    p.textContent = text;

    const readMore = document.createElement('p');
    const link = document.createElement('a');
    link.href = 'moreDetails.html';
    link.textContent = 'Read more...';
    readMore.appendChild(link);

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(readMore);

    document.getElementById('articleList').appendChild(article);

    let isVisible = true;
    if (type === 'opinion' && !document.getElementById('opinionCheckbox').checked) isVisible = false;
    if (type === 'recipe' && !document.getElementById('recipeCheckbox').checked) isVisible = false;
    if (type === 'update' && !document.getElementById('updateCheckbox').checked) isVisible = false;
    
    if (!isVisible) article.style.display = 'none';

    document.getElementById('inputHeader').value = '';
    document.getElementById('inputArticle').value = '';
    document.getElementById('opinionRadio').checked = false;
    document.getElementById('recipeRadio').checked = false;
    document.getElementById('lifeRadio').checked = false;

    document.getElementById('newContent').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('filterContent').style.display = 'none';
    document.getElementById('newContent').style.display = 'none';
});
