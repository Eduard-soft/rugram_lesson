import UserBadge from '../UserBadge';

import './styles.css';

const DetaileCard = ({
	userName,
	avatarUrl,
	userId,
	imgUrl,
	likes,
	isLikedByYou,
	comments
}) => {
	return (
		<div>
			<div>
				<UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
			</div>
			<div>
				<img src={imgUrl} alt="img" />
			</div>
			<div>
				like
				comments
			</div>
			<div>
				{'Оценили ${likes} человек'}
			</div>
			<div>
				comment
				comment
				comment
			</div>
		</div>
	)
}