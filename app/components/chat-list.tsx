import DeleteIcon from "../icons/delete.svg";

import styles from "./home.module.scss";

import Locale from "../locales";
import { Mask } from "../store/mask";

export function ChatItem(props: {
  onClick?: () => void;
  onDelete?: () => void;
  title: string;
  count: number;
  time: string;
  selected: boolean;
  id: number;
  index: number;
  narrow?: boolean;
  mask: Mask;
}) {
      <div className={`${styles["chat-item"]} ${props.selected && styles["chat-item-selected"]}`} onClick={props.onClick} title={`${props.title}\n${Locale.ChatItem.ChatItemCount(props.count,)}`}>
        <div className={styles["chat-item-title"]}>{props.title}</div>
          <div className={styles["chat-item-info"]}></div>
          <div className={styles["chat-item-count"]}>{Locale.ChatItem.ChatItemCount(props.count)}</div>
          <div className={styles["chat-item-date"]}>{new Date(props.time).toLocaleString()}</div>

        <div className={styles["chat-item-delete"]} onClickCapture={props.onDelete}><DeleteIcon /></div>
      </div>
    }