export const findImageByProduct = (string) => {
    const finder = string.replace(/[^a-zA-Z0-9]+/g, " ").toLowerCase();

    let imagePath = '';
    if (finder.includes('side by')) {
        imagePath = './image/side_by_side.png';
    } else if (finder.includes('single')) {
        imagePath = './image/single_container.png';
    } else if (finder.includes('two story')) {
        imagePath = './image/two_story_container.png';
    }

    return imagePath;
}