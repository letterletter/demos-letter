document.addEventListener('DOMContentLoaded', loadBookmarks);

function loadBookmarks() {
    chrome.bookmarks.getTree((bookmarks) => {
        const bookmarkList = document.getElementById('bookmark-list');
        bookmarkList.innerHTML = '';
        console.log('bookmarks', bookmarks);
        bookmarks.forEach(bookmark => {
            displayBookmark(bookmark, bookmarkList);
        });
    });
}

function displayBookmark(bookmark, parent) {
    if (bookmark.url) {
        const li = document.createElement('li');
        li.textContent = bookmark.title;
        li.dataset.id = bookmark.id;
        li.draggable = true;

        li.addEventListener('click', () => {
            li.classList.toggle('selected');
        });

        li.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', bookmark.id);
        });

        parent.appendChild(li);
    } else if (bookmark.children) {
        bookmark.children.forEach(child => displayBookmark(child, parent));
    }
}

// 删除选中的书签
document.getElementById('delete-selected').addEventListener('click', () => {
    const selected = document.querySelectorAll('li.selected');
    selected.forEach(li => {
        chrome.bookmarks.remove(li.dataset.id);
        li.remove();
    });
});


document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const targetLi = e.target.closest('li');
    if (targetLi) {
        const targetId = targetLi.dataset.id;
        // 处理书签移动逻辑
        chrome.bookmarks.move(draggedId, { parentId: targetId });
        loadBookmarks(); // 重新加载书签列表
    }
});
