const FilmListItemBadge =
    ({icon, amount = 0}: { icon: string, amount: number }) => (
        <span className="text-body-emphasis fs-5">
            <i className={`bi ${icon}`}/> {amount}
        </span>
    );

export default FilmListItemBadge;

export const FilmListItemBadgeSkeleton = () => <span className="text-body-emphasis col-2">
    <span className="placeholder w-100"></span>
</span>;