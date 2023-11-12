const headers = {
  Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function api(path: string) {
  const url = new URL(path, baseURL)

  return await fetch(url, {
    headers,
    next: {
      revalidate: 5, // 1hr
    },
  })
}
