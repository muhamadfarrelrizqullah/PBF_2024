// import Profile from "../components/profile";
// import Image from "next/image";
// export default function Home() {
//   return (
//     <div className="center">
//       <p style={{ textAlign: 'center' }}>
//         Ilmuwan yang luar biasa
//       </p>
//       <div className="columns-3">
//         <Profile />
//       <Profile />
//       <Profile />
//       </div>
//     </div>
//   );
// }

// import { Gallery } from "@/components/gallery";
// import Image from "next/image";
// export default function Home() {
//     return (
//       <div className="center">
//         <p style={{ textAlign: 'center' }}>
//           Ilmuwan yang luar biasa
//         </p>
//         <Gallery />
//       </div>
//     );
//   }

// import Profile from "../components/profile";
// export default function Bio() {
//   return (
//   <div>
//     <div className="intro">
//       <h1>Selamat datang di website saya!</h1>
//     </div>
//       <p className="summary">
//         Anda dapat membaca uneg-unegku di sini.
//         <br /><br />
//         <b>Juga ada <i>foto</i> ilmuwan!</b>
//       </p>
//   </div>
//   );
// }

// import { Gallery } from "@/components/gallery";
// import TodoList from "@/components/todolist";
// export default function Home() {
//   return (
//     <section>
//       <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
//       <hr />
//       <Gallery />
//       <hr />
//       <TodoList />
//     </section>
//   );
// }

import MyGallery from "@/components/mygallery";
export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <MyGallery/>
    </section>
  );
}