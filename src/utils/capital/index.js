const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

export {uppercaseWords}