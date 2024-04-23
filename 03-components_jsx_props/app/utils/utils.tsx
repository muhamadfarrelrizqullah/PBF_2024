export function getImageUrlV2(person: { name: string; imageId: string; }, size: number) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }