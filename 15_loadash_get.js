function get(obj, path, defaultValue) {
    // Convert the path to an array if it's not already.
    const pathArray = Array.isArray(path) ? path : path.split(".");

    // Reduce over the path array to find the nested value.
    const result = pathArray.reduce((acc, key) => acc && acc[key], obj);

    // Return the resolved value or the default value if undefined.
    return result === undefined ? defaultValue : result;
}

// Example usage
const data = {
    user: {
        profile: {
            name: 'John Doe',
            age: 30
        }
    }
};

console.log(get(data, 'user.profile.name')); // Output: 'John Doe'
console.log(get(data, 'user.profile.gender', 'Not specified')); // Output: 'Not specified'
console.log(get(data, ['user', 'profile', 'age'])); // Output: 30