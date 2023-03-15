import { FormGroup } from '@angular/forms';

export function validateRadio(form: FormGroup) {

  let isPossibleReceived;

  const dateFormat = new Date(form.value.dateReference)

  if (dateFormat > new Date()) {
    isPossibleReceived = false;
    form.controls['isReceived'].disable()
  } else {
    isPossibleReceived = true;
    form.controls['isReceived'].enable()
  }

  form.controls['isReceived'].setValue(isPossibleReceived);

}

export function validateForm(form: FormGroup) {
  Object.keys(form.controls).map(k => form.get(k)).forEach(c => c.updateValueAndValidity());
  return form;
}


export function b64toArrayBuffer(dataURI: string) {
  const byteString = atob(dataURI.split(',')[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return ia;
}

export function b64toBlob(dataURI: any, mimetype: any) {
  return new Blob([b64toArrayBuffer(dataURI)], {
    type: mimetype
  });
}

