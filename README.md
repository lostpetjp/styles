# styles
LOSTPET.JP (迷子ペットのデータベース)のスタイルを管理するリポジトリ。

## class

### color-scheme
- `.t1`と`.t2`は排他的。

```html
<body class="t1"></body>
```

| 名前 | 説明 |
| -- | -- |
| `.t1` | ライトテーマ。 |
| `.t2` | ダークテーマ。 |

### a要素

| 名前 | 説明 |
| -- | -- |
| `.a1` | インライン要素。 |
| `.a2` | ブロック要素。 |

### ラベル色
- サイドバーで使用するため、グローバル化。

| 名前 | 説明 | 値 |
| -- | -- | -- |
| `.l1` | 迷子。 | `#e74c3e` ![](https://via.placeholder.com/24/e74c3e/e74c3e?text=a) |
| `.l2` | 保護。 | `#2980b9` ![](https://via.placeholder.com/24/2980b9/2980b9?text=a) |
| `.l3` | 目撃。 | `#1a8840` ![](https://via.placeholder.com/24/1a8840/1a8840?text=a) |
| `.l4` | 虹の橋。 | `#d3277d` ![](https://via.placeholder.com/24/d3277d/d3277d?text=a) |


## 変数

### 文字色
- `--a{id}`で表現する。

| 名前 | 説明 | ライト | ダーク | 
| -- | -- | -- | -- |
| `--a1` | 通常。 | `#333` ![](https://via.placeholder.com/24/333/333?text=a) | `#eee` ![](https://via.placeholder.com/24/eee/eee?text=a) |
| `--a2` | 薄い。 | `#666` ![](https://via.placeholder.com/24/666/666?text=a) | `#bbb` ![](https://via.placeholder.com/24/bbb/bbb?text=a) |

### 背景色
