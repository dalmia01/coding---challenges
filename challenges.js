/** Toys distribution - ( K- Kids, T - Toys , i - position) , Get the final kid who will get the last toy * /

const getLastToyPosition = (t, k, i) => {
    return t > 0 && i < k ? getLastToyPosition(--t, k, ++i) : t > 0 && i === k ? getLastToyPosition(--t, k, 1) : i
}

getLastToyPosition(5,3,2);
