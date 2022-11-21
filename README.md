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

| 名前 |  ライト | ダーク | 
| -- |  -- | -- |
| `--a1` |  `#000` ![](https://via.placeholder.com/24/000/000?text=a) | `#fff` ![](https://via.placeholder.com/24/fff/fff?text=a) |
| `--a2` |  `#333` ![](https://via.placeholder.com/24/333/333?text=a) | `#eee` ![](https://via.placeholder.com/24/eee/eee?text=a) |
| `--a3` |  `#666` ![](https://via.placeholder.com/24/666/666?text=a) | `#bbb` ![](https://via.placeholder.com/24/bbb/bbb?text=a) |
| `--a4` |  `#999` ![](https://via.placeholder.com/24/999/999?text=a) | `#999` ![](https://via.placeholder.com/24/999/999?text=a) |

| 名前 |  ライト | ダーク | 
| -- |  -- | -- |
| `--a5` |  `#0064dc` ![](https://via.placeholder.com/24/0064dc/0064dc?text=a) | `#93c5fd` ![](https://via.placeholder.com/24/93c5fd/93c5fd?text=a) |
| `--a6` |  `#e00b00` ![](https://via.placeholder.com/24/e00b00/e00b00?text=a) | `#ff6961` ![](https://via.placeholder.com/24/ff6961/ff6961?text=a) |
| `--a7` |  `ff0000` ![](https://via.placeholder.com/24/f00/f00?text=a) | `#fce96a` ![](https://via.placeholder.com/24/fce96a/fce96a?text=a) |


### 背景色
- `--b{id}`で表現する。
- `--b5`は使用予定がない。

| 名前 |  ライト | ダーク | 
| -- |  -- | -- |
| `--b1` |  `#fff` ![](https://via.placeholder.com/24/fff/fff?text=a) | `#1c1c1e` ![](https://via.placeholder.com/24/1c1c1e/1c1c1e?text=a) |
| `--b2` |  `#f2f2f7` ![](https://via.placeholder.com/24/f2f2f7/f2f2f7?text=a) | `#2c2c2e` ![](https://via.placeholder.com/24/2c2c2e/2c2c2e?text=a) |
| `--b3` |  `#e5e5ea` ![](https://via.placeholder.com/24/e5e5ea/e5e5ea?text=a) | `#3a3a3c` ![](https://via.placeholder.com/24/3a3a3c/3a3a3c?text=a) |
| `--b4` |  `#d1d1d6` ![](https://via.placeholder.com/24/d1d1d6/d1d1d6?text=a) | `#48484a` ![](https://via.placeholder.com/24/48484a/48484a?text=a) |
| `--b6` |  `#aeaeb2` ![](https://via.placeholder.com/24/aeaeb2/aeaeb2?text=a) | `#636366` ![](https://via.placeholder.com/24/636366/636366?text=a) |

### ボタン色
- `--t{id}`で表現する。

| 名前 | 説明 | ライト | ダーク | 
| -- | -- | -- | -- |
| `--t1` | 通常。 | `#f8ca8e` ![](https://via.placeholder.com/24/f8ca8e/f8ca8e?text=a) | `#3b82f6` ![](https://via.placeholder.com/24/3b82f6/3b82f6?text=a) |

### サイズ
- `--s{id}`で表現する

| 名前 | 説明 |
| -- | -- |
| `.s1` | 両サイドの余白。 |