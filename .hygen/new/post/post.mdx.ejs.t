---
to: pages/posts/<%= path_name %>.mdx
---

import PostLayout from "@/components/posts/PostLayout"
import TwitterButton from "@/components/posts/TwitterButton"

export const meta = {
  title: '',
  description: '',
  createdAt: '',
  emoji: '',
  categories: [''],
}

#

**📍 Point**
1. 

## おわりに

ご質問・ご意見等は下記のTwitterアカウントにいただけると幸いです。

<TwitterButton />

export default ({ children }) => <PostLayout meta={meta}>{children}</PostLayout>
