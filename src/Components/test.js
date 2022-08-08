// {/* <div className="container">
// <div className="row">
//   <div className="col-lg-12 col-md-6 ">
//     <nav className={` ${style.navbar1} fixed-top `}>
//       {/* <!-- LOGO --> */}
//       <div className={`row ${style.navRow}`}>
//         <div className={`col-sm-6 ${style.tglBTN} `}>
//           <span className={` ${style.logo}`}>
//             <Link href="/">
//               <img
//                 className={style.logoimage}
//                 src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-logo.png"
//               ></img>
//             </Link>
//           </span>
//         </div>
//         <div className={`col-sm-6 ${style.tglBTN} `}>
//           <ul className={style.navlinks}>
//             {/* <!-- USING CHECKBOX HACK --> */}

//             <input
//               type="checkbox"
//               id="checkbox_toggle"
//               className={style.hamburgercheck}
//             />
//             <label
//               htmlFor="checkbox_toggle"
//               className={style.hamburger}
//             >
//               &#9776;
//             </label>
//             {/* <!-- NAVIGATION MENUS --> */}
//             <div className={`float-right ${style.menu}`}>
//               <li>
//                 <Link href="/FindActivities">{getResponseMessage(constants).find_act1}</Link>
//               </li>
//               <li>
//                 <Link href="/Blog">Blog</Link>
//               </li>
//               <li>
//                 <Link href="/KidzappAward">
//                   KidzAppAwards</Link>
//               </li>
//               <li>
//                 <Link href="/">KidzAppTV</Link>
//               </li>
//               <li>
//                 <Link href="/Getintouch">GetInTouch</Link>
//               </li>
//               <li>
//                 <Link href="/GetListed">GetListed</Link>
//               </li>
//               <li>
//                 <FormControl >
//                   <InputLabel id="demo-select-small">
//                     Language
//                   </InputLabel>
//                   <Select
//                 className={style.languagebtn}
                    
//                     size="small"
//                     value={Language}
//                     // {dropdownValue}
//                     // {dropdownValue ? dropdownValue : "ae"}
//                     // defaultValue={10}
//                     label="Language"
//                   >
                    
//                     <MenuItem
//                       value={"ae"}
//                       onClick={() => {
//                         setLanguage("ae");
//                         localStorage.setItem("language", "ae");
//                         window.location.reload("/");
//                       }}
//                     >
//                       UAE
//                     </MenuItem>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem
//                       value={"ar"}
//                       onClick={() => {
//                         setLanguage("ar");
//                         localStorage.setItem("language", "ar");
//                         window.location.reload("/");
//                       }}
//                     >
//                       EG
//                     </MenuItem>
//                   </Select>
//                 </FormControl>
//               </li>
//               <li className={style.LoginIcon}>
//                 <LoginIcon
//                   onClick={handleOpen}
//                   className={style.LoginIcon1}
//                 />
//               </li>
//             </div>
//           </ul>
//         </div>

//         {/* <!-- NAVIGATION MENU --> */}
//       </div>
//     </nav>
//   </div>
// </div>
// </div> */}