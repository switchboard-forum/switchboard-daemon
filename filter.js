exports.parse = data => {
    data.body = data.body.replace("Pierre Joseph Proudhon", "Utopian");
    return data;
}
