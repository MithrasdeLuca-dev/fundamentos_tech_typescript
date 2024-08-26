

// interface PayloadData {
//     id: string;
//     studentId: string;
//     profileIds: string[];
//     profile?: string;
// }

// const createToken = <T extends object>(payload: T) => {
//     return  this.jwtService.signAsync(payload, {
//       secret:'lajskldjl',
//       expiresIn: '1h',
//     });
//   }


// //const dataUser = await this.userRegisterRepository.findByEmail(email)

// const dataUser = {
//     profileIds: ['perfil01', 'perfil02', 'perfil03'],
//     studentId: 'student10' ?? '',
//     id: '102030', 
// }

  
// const payload: PayloadData = {
//     profileIds: dataUser.profileIds,
//     studentId: dataUser.studentId ?? '',
//     id: dataUser.id,
//   };



// const tokenChangePassword = createToken({
//     id: payload.id,
//   }
// );

//   const token = (createToken(payload) => {
//       return {
//         message: 'E-mail e/ou senha são inválidos',
//         payload,
//         token,
//       }
//   });

