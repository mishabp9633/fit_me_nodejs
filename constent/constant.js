var val = {
    c:10,
    w:12,
    i:38
}


export function valueFind(Height, Weight){
      const VALUE = {
        waist: (Weight / 2) - val.w,
        chest: (Weight / 3) + val.c,
        inseam: (Height - val.i)
      };

      return VALUE
}
