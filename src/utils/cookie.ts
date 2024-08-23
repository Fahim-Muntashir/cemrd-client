'use server'

import { cookies } from 'next/headers'

async function removeCookie() {
  cookies().delete('refreshToken')
}

export default removeCookie;
