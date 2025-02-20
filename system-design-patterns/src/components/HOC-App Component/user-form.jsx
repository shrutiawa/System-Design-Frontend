import { includeUpdatableResource } from "./include-updatable-resource";
import { includeUpdatableUser } from "./include-updatable-user";

export const UserInfoForm = includeUpdatableResource(
  ({ user, onUserChange, onUserPost, onUserReset }) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => onUserChange({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            value={age}
            onChange={(e) => onUserChange({ age: Number(e.target.value) })}
          />
        </label>
        <button onClick={onUserReset}>Reset</button>
        <button onClick={onUserPost}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/users/2", "user"
);
