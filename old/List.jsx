import styles from './List.module.css'

function List({ items = [], category = 'Category' }) {

    items.sort((a, b) => b.calories - a.calories);
    const listItems = items.map(list => <li key={list.id}>{list.name}:&nbsp;<b>{list.calories}</b></li>)

    return (
        <>
            <h3 className={styles.listcategory}>{category}</h3>
            <ul className={styles.listitems}>{listItems}</ul>
        </>
    );
}

export default List