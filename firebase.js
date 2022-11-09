// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from '@firebase/analytics'
import { collection, getDocs, getFirestore, updateDoc, doc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFunctions } from 'firebase/functions'
import fs from 'fs'
// import { getStripePayments } from '@stripe/firestore-stripe-payments'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAa5nHk7IC_k4ErF_50A-TVHVPw5CVC69A',
  authDomain: 'poppin-5741f.firebaseapp.com',
  projectId: 'poppin-5741f',
  storageBucket: 'poppin-5741f.appspot.com',
  messagingSenderId: '596790092141',
  appId: '1:596790092141:web:658045399afaf0cc12fa64',
  measurementId: 'G-2C4ECLHVKL',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
// Firestore Reference
const db = getFirestore()
// Cloud Storage Reference
const storage = getStorage(firebaseApp)
// Authentication Reference
const auth = getAuth()
// Analytics Reference
// const analytics = getAnalytics(firebaseApp)
// Functions reference
const functions = getFunctions(firebaseApp)
// const payments = getStripePayments(firebaseApp, {
//   productsCollection: 'products',
//   customersCollection: 'customers',
// })

async function x() {
  // Upload the image to storage bucket
  // const storageRef = ref(
  //   storage,
  //   'images/party/BDC4FD22-ACBD-4361-9D40-E675ADF7D2BE.png'
  // )

  // // const file = new File([''], 'BDC4FD22-ACBD-4361-9D40-E675ADF7D2BE.png', {
  // //   type: 'image/png',
  // // })
  const file = fs.readFileSync('BDC4FD22-ACBD-4361-9D40-E675ADF7D2BE.png')
  // console.log(file)

  // console.log('file :>> ', file);

  // uploadBytes(storageRef, file).then((snapshot) => {
  //   console.log('snapshot', snapshot)
  // })


 
}
 // 34.2661566
x()

async function modifyParty() {
  // let count = 0
  
  const partyRef = doc(db, 'Party', 'ED0931E7-7186-436E-815F-8117680E0814')
  const partyDoc = await updateDoc(partyRef, {
    previewImageURL:
      'https://i.ibb.co/wr50WGb/BDC4-FD22-ACBD-4361-9-D40-E675-ADF7-D2-BE.png',
  })
  console.log(partyDoc)
}

// https://firebasestorage.googleapis.com:443/v0/b/poppin-5741f.appspot.com/o/images%2Fparty%2FBDC4FD22-ACBD-4361-9D40-E675ADF7D2BE.png?alt=media&token=7ee9ce90-1693-4e07-9e27-1d4623a702b4
async function checkIfPartyWasModified() {
  const querySnapshot = await getDocs(collection(db, 'Party')) // Party

  const partiesToFind = [
    // '805046C4-2BCC-4CD7-99A4-063FE5375C97',
    // '2A6C7A99-89CD-4AF8-B554-65D98CD67CC4',
    'ED0931E7-7186-436E-815F-8117680E0814',
    // 'DB967C76-8799-42C8-803C-FA5E1D20BA0D',
    // '2D4CADAB-87EE-483A-85FD-523E9290F3BC',
  ]
  querySnapshot.forEach((doc, index) => {
    if (partiesToFind.some(partyId => partyId === doc.id)) {
      // if (doc.id === '2D4CADAB-87EE-483A-85FD-523E9290F3BC') {
      console.dir(doc.data())
      // count += 1
    }
  })
}

modifyParty()
// checkIfPartyWasModified()

export { db, storage, auth, functions }
